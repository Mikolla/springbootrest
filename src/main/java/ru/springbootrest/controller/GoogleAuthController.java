package ru.springbootrest.controller;

import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonReader;
import javax.json.JsonStructure;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.client.json.jackson.JacksonFactory;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import ru.springbootrest.model.User;
import ru.springbootrest.service.abstraction.role.RoleService;
import ru.springbootrest.service.abstraction.user.UserService;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken.Payload;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.javanet.NetHttpTransport;

import javax.validation.Valid;
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.security.GeneralSecurityException;
import java.util.Collections;
import java.util.List;

import static com.google.api.client.googleapis.auth.oauth2.GoogleIdToken.parse;


@RestController
@RequestMapping("/restU")
public class GoogleAuthController {

    @Autowired
    private UserService userService;
    @Autowired
    private RoleService roleService;

    RestTemplate restTemplate = new RestTemplate();

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/user/token/{tok:.+}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Object> getToken(@PathVariable("tok") String token) throws IOException, GeneralSecurityException {
        System.out.println(token);
     /*   String CLIENT_ID = "353616429679-s7k7v4o6q3t91g2nsdmauvo82uunv19d.apps.googleusercontent.com";
        String GoogleApiTokenInfoUrl = "https://oauth2.googleapis.com/tokeninfo?id_token=";

        String url = GoogleApiTokenInfoUrl + token;
        URL obj = new URL(url);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();
        // optional default is GET
        con.setRequestMethod("GET");

        //add request header
      //  con.setRequestProperty("User-Agent", USER_AGENT);

        int responseCode = con.getResponseCode();
        System.out.println("\nSending 'GET' request to URL : " + url);
        System.out.println("Response Code : " + responseCode);

        BufferedReader in = new BufferedReader(
                new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuffer response = new StringBuffer();

        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();

        //print result
        System.out.println(response.toString()); */


        String url = "https://oauth2.googleapis.com/tokeninfo?id_token=" + token.trim();

        URL obj = new URL(url);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();

        // optional default is GET
        con.setRequestMethod("GET");

        //add request header
        con.setRequestProperty("User-Agent", "Mozilla/5.0");

        int responseCode = con.getResponseCode();
        System.out.println("\nSending 'GET' request to URL : " + url);
        System.out.println("Response Code : " + responseCode);

        BufferedReader in = new BufferedReader(
                new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuffer response = new StringBuffer();

        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();

        //print result
        System.out.println(response.toString());


        return new ResponseEntity<>(token, HttpStatus.OK);
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