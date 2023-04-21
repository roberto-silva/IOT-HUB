package com.soft.iot_hub_api.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "machine")
public class Machine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @OneToMany(fetch = FetchType.EAGER)
    private Set<Production> productions = new HashSet<>();

    @OneToMany(fetch = FetchType.EAGER)
    private Set<StoppingPoint> stoppingPoints = new HashSet<>();

    @Column(name = "pieces_per_minute")
    private Integer piecesPerMinute;

    @Column(name = "maximum_production_capacity")
    private Integer maximumProductionCapacity;

    @Column(name = "working_time")
    private Integer workingTime;

}
