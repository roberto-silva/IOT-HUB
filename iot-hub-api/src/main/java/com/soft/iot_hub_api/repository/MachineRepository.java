package com.soft.iot_hub_api.repository;

import com.soft.iot_hub_api.domain.Machine;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MachineRepository extends JpaRepository<Machine, Long> {
    Page<Machine> findAllByNameContainsIgnoreCase(String search, Pageable pageable);
}
