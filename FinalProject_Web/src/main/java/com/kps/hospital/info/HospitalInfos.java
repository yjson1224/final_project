package com.kps.hospital.info;

import java.util.List;

public class HospitalInfos {
 
	private List<HospitalInfo> hospitalInfo;
	public HospitalInfos() {
		// TODO Auto-generated constructor stub
	}
	public HospitalInfos(List<HospitalInfo> hospitalInfo) {
		super();
		this.hospitalInfo = hospitalInfo;
	}
	public List<HospitalInfo> getHospitalInfo() {
		return hospitalInfo; 
	}
	public void setHospitalInfo(List<HospitalInfo> hospitalInfo) {
		this.hospitalInfo = hospitalInfo;
	}
	
}
