package com.soft.iot_hub_api.repository;

import com.soft.iot_hub_api.domain.StoppingPoint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StoppingPointRepository extends JpaRepository<StoppingPoint, Long> {
}
