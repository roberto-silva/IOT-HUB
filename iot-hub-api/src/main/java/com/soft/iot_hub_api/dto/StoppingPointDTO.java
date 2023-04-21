package com.soft.iot_hub_api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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

    private Instant start;

    private Instant end;

    private Instant duration;

    private String reason;

    public Long getDuration() {
        return start.until(end, ChronoUnit.MINUTES);
    }
}
