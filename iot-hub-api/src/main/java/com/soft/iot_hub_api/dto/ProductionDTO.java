package com.soft.iot_hub_api.dto;

import com.soft.iot_hub_api.domain.enums.Time;
import lombok.*;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductionDTO implements Serializable {

    private Long id;

    private Time time;

    private String product;

    private Integer goodPiece = 0;

    private Integer badPiece = 0;

    @Getter(AccessLevel.NONE)
    private Integer total;

    public Integer getTotal() {
        return goodPiece + badPiece;
    }
}
