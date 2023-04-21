package com.soft.iot_hub_api.repository;

import com.soft.iot_hub_api.domain.Production;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductionRepository extends JpaRepository<Production, Long> {
}
