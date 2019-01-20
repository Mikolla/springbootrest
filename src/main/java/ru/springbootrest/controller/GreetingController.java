package ru.springbootrest.controller;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import jdk.nashorn.internal.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.springbootrest.model.User;
import ru.springbootrest.service.abstraction.role.RoleService;
import ru.springbootrest.service.abstraction.user.UserService;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/rest")
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

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/user/all", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        if (users.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/user/del/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<User> deleteUser(@PathVariable("id") Long userId) {
        User user = userService.getUserById(userId);
        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        userService.deleteUser(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }



    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/user/add", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<User> saveCustomer(@RequestBody @Valid User user) {

        if (user == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        userService.saveUser(user);
        Gson g = new Gson();
        String str = g.toJson(user);
        System.out.println(str);

        String sss = "{\"name\":\"66q6\",\"login\":\"66q6\",\"password\":\"66q6\",\"roles\":[{\"id\":2,\"roleName\":\"User\"}]}";
        User u = g.fromJson(sss, User.class);
        userService.saveUser(u);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }


    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/user/edit", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<User> updateCustomer(@RequestBody @Valid User user) {

        if (user == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
       userService.editUser(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }


    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/user/principal", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<User> getUserPrincipal() {
        User user = getPrincipalUser();
        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(user, HttpStatus.OK);
    }



    private User getPrincipalUser() {
        User user = null;
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal instanceof User) {
            user = (User) principal;
        }
        return user;
    }


}


/*PUT - update
{
    "id": 3,
    "name": "guest99",
    "login": "guest",
    "password": "12",
    "roles": [
        {
            "id": 2,
            "roleName": "User",
            "authority": "User"
        }
    ]

}
 */

/*POST - save

{
    "name": "pas562",
    "login": "log562",
    "password": "pas562",
    "roles": [
        {
            "id": 1,
            "roleName": "Admin"
        }
    ]
}



 */