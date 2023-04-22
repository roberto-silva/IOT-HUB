package com.soft.iot_hub_api.controller.exception;

import com.soft.iot_hub_api.domain.Machine;
import com.soft.iot_hub_api.dto.MachineDTO;
import com.soft.iot_hub_api.dto.ProductionDTO;
import com.soft.iot_hub_api.dto.SimplifiedMachineDTO;
import com.soft.iot_hub_api.dto.StoppingPointDTO;
import com.soft.iot_hub_api.service.MachineService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@AllArgsConstructor
@RequestMapping(value = "/api/v1/machines")
public class MachineController {

    private MachineService service;

    @GetMapping
    public ResponseEntity<Page<MachineDTO>> findAll(Pageable pageable,
                                                    @RequestParam String search) {
        return ResponseEntity.ok().body(this.service.getAll(pageable, search).map(MachineDTO::new));
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<MachineDTO> findById(@PathVariable Long id) {
        MachineDTO machineDTO = new MachineDTO(this.service.getById(id));
        return ResponseEntity.ok().body(machineDTO);
    }

    @PostMapping
    public ResponseEntity<URI> insert(@RequestBody SimplifiedMachineDTO machineDTO) {
        Machine machine = service.create(machineDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(machine.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<URI> update(@RequestBody SimplifiedMachineDTO machineDTO, @PathVariable Long id) {
        Machine machine = this.service.update(id, machineDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(machine.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        this.service.delete(id);
        return ResponseEntity.ok().build();
    }

    @PatchMapping(value = "/{id}/productions")
    public ResponseEntity<URI> addProduction(@PathVariable Long id, @RequestBody ProductionDTO productionDTO) {
        Machine machine = this.service.addProduction(id, productionDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(machine.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @DeleteMapping(value = "/{id}/productions/{productionId}")
    public ResponseEntity<URI> removeProduction(@PathVariable Long id, @PathVariable Long productionId) {
        Machine machine = this.service.removeProduction(id, productionId);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(machine.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PatchMapping(value = "/{id}/stopping-points")
    public ResponseEntity<URI> addStoppingPoint(@PathVariable Long id, @RequestBody StoppingPointDTO stoppingPointDTO) {
        Machine machine = this.service.addStoppingPoint(id, stoppingPointDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(machine.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @DeleteMapping(value = "/{id}/stopping-points/{stoppingPointId}")
    public ResponseEntity<URI> removeStoppingPoint(@PathVariable Long id, @PathVariable Long stoppingPointId) {
        Machine machine = this.service.removeStoppingPoint(id, stoppingPointId);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(machine.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

}
