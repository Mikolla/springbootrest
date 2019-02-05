package ru.springbootrest.controller;

import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import ru.springbootrest.model.User;
import ru.springbootrest.service.abstraction.role.RoleService;
import ru.springbootrest.service.abstraction.user.UserService;

import javax.validation.Valid;
import java.util.List;

public class CreateValidateUserController {



    @RestController
    @RequestMapping("/restu")
    public class GreetingController {

        @Autowired
        private UserService userService;
        @Autowired
        private RoleService roleService;

        @CrossOrigin(origins = "*")
        @RequestMapping(value = "/user/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
        public ResponseEntity<User> getUser(@PathVariable("id") Long userId) {
            if (userId == null) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            User user = userService.getUserById(userId);
            if (user == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(user, HttpStatus.OK);
        }




    }


}
