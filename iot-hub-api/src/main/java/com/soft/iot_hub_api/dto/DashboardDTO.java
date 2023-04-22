package com.soft.iot_hub_api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DashboardDTO implements Serializable {

    private Set<StoppingPointDTO> stoppingPoints = new HashSet<>();

}
