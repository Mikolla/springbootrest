package ru.springbootrest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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

 /*   private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/greeting")
    public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return new Greeting(counter.incrementAndGet(),
                            String.format(template, name));
    } */


  /*  @RequestMapping("/test")
    public String getIndex(Model model){
        List<User> users = userService.getAllUsers();
        model.addAttribute("users", users);
        model.addAttribute("name", "TEST");
        return "index";
    } */



    @RequestMapping(value = "{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
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


    @RequestMapping(value = "/user/all", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        if (users.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(users, HttpStatus.OK);
    }


    @RequestMapping(value = "/user/del/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<User> deleteUser(@PathVariable("id") Long userId) {
        User user = userService.getUserById(userId);
        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        userService.deleteUser(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }




    @RequestMapping(value = "", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<User> saveCustomer(@RequestBody @Valid User user) {

        if (user == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        userService.saveUser(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }



    @RequestMapping(value = "", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<User> updateCustomer(@RequestBody @Valid User user) {
        HttpHeaders headers = new HttpHeaders();
        if (user == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
       userService.editUser(user);
        return new ResponseEntity<>(user, headers, HttpStatus.OK);
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