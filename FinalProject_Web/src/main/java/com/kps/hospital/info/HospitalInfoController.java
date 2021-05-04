package com.kps.hospital.info;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class HospitalInfoController {
	
	@Autowired
	private HospitalInfoDAO hiDAO; 

	@RequestMapping(value = "/hospital.get.json", method = RequestMethod.GET, produces="application/json; charset=utf-8")
	public @ResponseBody HospitalInfos hospitalGet(HttpServletRequest req, HttpServletResponse res, HospitalInfo hi) {
		// hiDAO.search(req, hi);
		// req.setAttribute("contentPage", "list.jsp");
		res.addHeader("Access-Control-Allow-Origin", "*");
		// System.out.println(hiDAO.search(req, hi).getHospitalInfo().get(0).getDutyaddr());
		return hiDAO.search(req, hi);
	} 
	
	@RequestMapping(value = "/detailInfo.get.json", method = RequestMethod.GET, produces="application/json; charset=utf-8")
	public @ResponseBody HospitalInfos infoGet(HttpServletRequest req, HttpServletResponse res, HospitalInfo hi) {
		// hiDAO.search(req, hi);
		// req.setAttribute("contentPage", "list.jsp");
		res.addHeader("Access-Control-Allow-Origin", "*");
		// System.out.println(hiDAO.search(req, hi).getHospitalInfo().get(0).getDutyaddr());
		return hiDAO.showInfo(req, hi);
	} 
	
	// list에서 클릭하면 detailInfo 보여줌
	@RequestMapping(value = "/detailInfo.go", method = RequestMethod.GET)
	public String showDetailInfo(HttpServletRequest req, HttpServletResponse res, HospitalInfo hi) {
		hiDAO.showInfo(req, hi);
		req.setAttribute("contentPage", "list.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/list.up", method = RequestMethod.GET)
	public String listUp(HttpServletRequest req, HttpServletResponse res, HospitalInfo hi) {
		hiDAO.search(req, hi);
		//hiDAO.showInfo(req, hi);
		req.setAttribute("contentPage", "list.jsp");
		return "index";
	}
	
//	@RequestMapping(value = "/back.to.list", method = RequestMethod.GET)
//	public String backToList(HttpServletRequest req, HttpServletResponse res, HospitalInfo hi) {
//		req.setAttribute("contentPage", "list.jsp");
//		return "index";
//	}
}