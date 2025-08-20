package parrino.riccardo.mycrm.service;

import java.util.List;
import java.util.Optional;

import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import parrino.riccardo.mycrm.dto.ProductDTO;
import parrino.riccardo.mycrm.model.Product;
import parrino.riccardo.mycrm.model.User;
import parrino.riccardo.mycrm.repository.ProductRepository;

@Service
public class ProductService {

    private final ProductRepository productRepository;
    private final UserService userService;

    public ProductService (ProductRepository productRepository, UserService userService) {
        this.productRepository = productRepository;
        this.userService = userService;
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

            String username = SecurityContextHolder.getContext().getAuthentication().getName();
            Optional<User> user = userService.findUserByUsername(username);

            if (user.isPresent()) {
                user.get().getProduce().add(productCreated);
                userService.saveUser(user.get());
            }

            return productCreated;
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    public List<Product> readProduct() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        Optional<User> user = userService.findUserByUsername(username);

        if (user.isPresent()) {
            return user.get().getProduce();
        }

        return null;
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

            String username = SecurityContextHolder.getContext().getAuthentication().getName();
            Optional<User> user = userService.findUserByUsername(username);

            if (user.isPresent()) {
                user.get().getProduce().remove(product);
                user.get().getProduce().add(product);
                userService.saveUser(user.get());
            }

            productRepository.save(product);
        }
        return false;
    }
    
    public Boolean deleteProductById(Long productId) {
        try {
            String username = SecurityContextHolder.getContext().getAuthentication().getName();
            Optional<User> user = userService.findUserByUsername(username);

            if (user.isPresent()) {
                user.get().getProduce()
                    .remove(
                        Product.builder()
                            .productId(productId)
                        .build()
                );
                userService.saveUser(user.get());
            }

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
