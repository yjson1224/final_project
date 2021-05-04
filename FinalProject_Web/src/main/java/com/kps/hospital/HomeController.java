package com.kps.hospital;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.kps.hospital.info.HospitalInfoDAO;


@Controller
public class HomeController {
   
   
   @Autowired
   private HospitalInfoDAO hiDAO;
    
    
   @RequestMapping(value = "/", method = RequestMethod.GET)
   public String home(HttpServletRequest req) {
      req.setAttribute("contentPage", "list.jsp");
      return "index";
   }
    
} 