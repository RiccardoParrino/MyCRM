package parrino.riccardo.mycrm.service;

import java.util.Optional;

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

    public String createProduct(ProductDTO productDTO) {
        return "entity";
    }

    public Optional<Product> readProduct(Long productId) {
        return productRepository.findById(productId);
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
        productRepository.deleteById(productId);
        return true;
    }

}
