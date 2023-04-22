package com.soft.iot_hub_api.dto;

import com.soft.iot_hub_api.domain.StoppingPoint;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.BeanUtils;

import javax.persistence.Column;
import java.io.Serializable;
import java.time.Instant;
import java.time.temporal.ChronoUnit;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class StoppingPointDTO implements Serializable {

    private Long id;

    private Instant startPoint;

    private Instant endPoint;

    private Instant duration;

    private String reason;

    public StoppingPointDTO(StoppingPoint stoppingPoint) {
        BeanUtils.copyProperties(stoppingPoint, this);
    }

    public Long getDuration() {
        return startPoint.until(endPoint, ChronoUnit.MINUTES);
    }
}
