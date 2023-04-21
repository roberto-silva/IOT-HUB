package com.soft.iot_hub_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StoppingPointRepository extends JpaRepository<StoppingPointRepository, Long> {
}
