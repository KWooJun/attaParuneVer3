package com.green.attaparunever2.user.user_payment_member.model;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserGetPaymentMemberReq {
    @Schema(description = "주문 PK", example = "1", requiredMode = Schema.RequiredMode.REQUIRED)
    private long orderId;
}
