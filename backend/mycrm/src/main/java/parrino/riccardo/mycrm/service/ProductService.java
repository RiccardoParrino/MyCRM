package parrino.riccardo.mycrm.service;

import java.util.List;

import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.stereotype.Service;

import parrino.riccardo.mycrm.dto.ProductDTO;
import parrino.riccardo.mycrm.model.Product;
import parrino.riccardo.mycrm.repository.ProductRepository;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService (ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product createProduct(ProductDTO productDTO) {
        try{
            Product productCreated = this.productRepository.save(Product.builder()
                .name(productDTO.getName())
                .description(productDTO.getDescription())
                .unit(productDTO.getUnit())
                .price(productDTO.getPrice())
                .stock(productDTO.getStock())
                .notes(productDTO.getNotes())
                .build()
            );
            return productCreated;
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    public List<Product> readProduct() {
        return productRepository.findAll();
    }
    
    public Boolean updateProduct(ProductDTO productDTO) {
        if (productRepository.existsById(productDTO.getProductId())) {
            Product product = Product.builder()
                .productId(productDTO.getProductId())
                .name(productDTO.getName())
                .description(productDTO.getDescription())
                .unit(productDTO.getUnit())
                .price(productDTO.getPrice())
                .stock(productDTO.getStock())
                .notes(productDTO.getNotes())
            .build();
            productRepository.save(product);
        }
        return false;
    }
    
    public Boolean deleteProductById(Long productId) {
        try {
            productRepository.deleteById(productId);
            return true;
        } catch (IllegalArgumentException ex) {
            System.out.println(ex);
            return false;
        } catch (OptimisticLockingFailureException ex){
            System.out.println("Product doesn't exist!");
            return false;
        }
    }

}
