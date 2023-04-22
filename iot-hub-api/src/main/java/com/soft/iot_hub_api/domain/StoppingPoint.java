package com.soft.iot_hub_api.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.Instant;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "stopping_point")
public class StoppingPoint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "start_point")
    private Instant startPoint;

    @Column(name = "end_point")
    private Instant endPoint;

    @Column(name = "reason")
    private String reason;

}
