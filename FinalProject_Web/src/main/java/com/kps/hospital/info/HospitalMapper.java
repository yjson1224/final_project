package com.kps.hospital.info;

import java.util.List;

public interface HospitalMapper { 
	public abstract List<HospitalInfo> searchHospitalName1(HospitalInfo hi);
	public abstract List<HospitalInfo> searchHospitalName2(HospitalInfo hi);
	public abstract List<HospitalInfo> searchHospitalName3(HospitalInfo hi);
	public abstract List<HospitalInfo> searchHospitalName4(HospitalInfo hi);
	public abstract List<HospitalInfo> searchHospitalName5(HospitalInfo hi);
	public abstract List<HospitalInfo> searchHospitalName6(HospitalInfo hi);
	public abstract List<HospitalInfo> searchHospitalName7(HospitalInfo hi);
	public abstract List<HospitalInfo> searchHospitalName8(HospitalInfo hi);
	public abstract List<HospitalInfo> showDetailInfo(HospitalInfo hi);
}
 