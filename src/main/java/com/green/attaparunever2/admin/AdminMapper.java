package com.green.attaparunever2.admin;

import com.green.attaparunever2.admin.model.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdminMapper {
    int insAdmin(AdminSignUpReq p);
    AdminSignInRes selAdminByAid(String uId);
    AdminGetRes selAdminByAdminId(long userId);
    AdminDTO selAdminByEmailAndName(AdminFindIdReq req);
    int delAdmin(long adminId);
    int insAdminEmailVerification(AdminMailVerificationDTO dto);
    AdminMailVerificationDTO selAdminEmailVerificationByAdminId(long adminId);
    AdminMailVerificationDTO selAdminEmailVerificationByAId(String uId);
    int delAdminEmailVerification(long adminId);

    int patchUpw(AdminUpwPatchReq p);


    List<getCompanyPaymentRes> getCompanyPayment();
    int signAdmin(SignAdminReq p);
    SignInAdminRes signInAdminByAid(String aId);
    List<SelRefundRes> selRefund();
    List<SelCompanyEnrollmentRes> selCompanyEnrollment();
    List<SelRestaurantEnrollmentRes> selRestaurantEnrollment();
}
