package com.soft.iot_hub_api.domain;

import com.soft.iot_hub_api.domain.enums.Time;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "production")
public class Production {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Enumerated(EnumType.ORDINAL)
    @Column(name = "time")
    private Time time;

    @Column(name = "product")
    private String product;

    @Column(name = "good_piece")
    private Integer goodPiece = 0;

    @Column(name = "bad_piece")
    private Integer badPiece = 0;

    public void addGoodPiece() {
        this.goodPiece++;
    }

    public void addBadPiece() {
        this.badPiece++;
    }

}
