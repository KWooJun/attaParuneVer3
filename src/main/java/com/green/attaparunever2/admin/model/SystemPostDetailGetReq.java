package com.green.attaparunever2.admin.model;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SystemPostDetailGetReq {
    @Schema(description = "게시글 PK", example = "1", requiredMode = Schema.RequiredMode.REQUIRED)
    private long inquiryId;

    @Schema(description = "관리자 or 사용자 PK", example = "1", requiredMode = Schema.RequiredMode.REQUIRED)
    private long id;
}
