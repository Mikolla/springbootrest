package ru.springbootrest.controller;


import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMethod;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
public class HomeController {


/*	@RequestMapping(value = { "/", "/welcome**" }, method = RequestMethod.GET)
	public String getWelcome(ModelMap modelMap) {
		modelMap.addAttribute("adminRole", new Role("Admin"));
		modelMap.addAttribute("userRole", new Role("User"));
		modelMap.addAttribute("adminName", getPrincipal());
		modelMap.addAttribute("users", userService.getAllUsers());
		return "welcome";
	} */

	@RequestMapping(value = "/login")
	public String loginPage() {
	    return "login";
	}

	@RequestMapping("/adminrest")
	public String adminPageREST(Model model){
		return "adminrest";
	}

	@RequestMapping(value = "/userrest")
	public String userPageREST() {
		return "userrest";
	}

	@RequestMapping(value = "/access_denied")
	public String deniesPage() {
		return "access_denied";
	}

	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public String logOut(HttpServletRequest request, HttpServletResponse response) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		if (auth != null) {
			new SecurityContextLogoutHandler().logout(request, response, auth);
		}
		return "redirect:/login?logout";
	}




}
