package com.green.attaparunever2.restaurant.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class RestaurantAroundGetReq {
    @Schema(description = "검색 단어", example = "돈까스")
    private String searchText;
    @Schema(description = "정렬 기준(0:전체, 1:거리순)", example = "0")
    @Max(value = 1, message = "존재하지 않는 기준 입니다.")
    @Min(value = 0, message = "존재하지 않는 기준 입니다.")
    private int orderFilter;
    @Schema(description = "사용자의 위도", example = "35.86")
    private double userLat;
    @Schema(description = "사용자의 경도", example = "128.59")
    private double userLng;
    @JsonIgnore
    private double aroundMinLng;
    @JsonIgnore
    private double aroundMinLat;
    @JsonIgnore
    private double aroundMaxLat;
    @JsonIgnore
    private double aroundMaxLng;

}
