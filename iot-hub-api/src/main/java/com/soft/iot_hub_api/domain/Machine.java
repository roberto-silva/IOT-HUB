package com.soft.iot_hub_api.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "machine")
public class Machine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "machine_id")
    private Set<Production> productions = new HashSet<>();

    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "machine_id")
    private Set<StoppingPoint> stoppingPoints = new HashSet<>();

    @Column(name = "pieces_per_minute")
    private Integer piecesPerMinute;

    @Column(name = "maximum_production_capacity")
    private Integer maximumProductionCapacity;

    @Column(name = "working_time")
    private Integer workingTime;

    public void addProduction(Production production) {
        this.productions.add(production);
    }

    public void removeProduction(Long productionId) {
        this.productions.removeIf(production -> production.getId().equals(productionId));
    }

    public void addStoppingPoint(StoppingPoint stoppingPoint) {
        this.stoppingPoints.add(stoppingPoint);
    }

    public void removeStoppingPoint(Long stoppingPointId) {
        this.stoppingPoints.removeIf(stoppingPoint -> stoppingPoint.getId().equals(stoppingPointId));
    }


}
