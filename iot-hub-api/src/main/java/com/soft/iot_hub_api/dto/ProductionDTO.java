package com.soft.iot_hub_api.dto;

import com.soft.iot_hub_api.domain.Production;
import com.soft.iot_hub_api.domain.enums.Time;
import lombok.*;
import org.springframework.beans.BeanUtils;

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

    public ProductionDTO(Production production) {
        BeanUtils.copyProperties(production, this);
    }

    public Integer getTotal() {
        return goodPiece + badPiece;
    }
}
