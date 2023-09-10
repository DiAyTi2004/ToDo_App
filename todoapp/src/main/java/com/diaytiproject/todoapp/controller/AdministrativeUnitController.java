package com.diaytiproject.todoapp.controller;

import com.diaytiproject.todoapp.dto.AdministrativeUnitDto;
import com.diaytiproject.todoapp.dto.SearchObject;
import com.diaytiproject.todoapp.service.AdministrativeUnitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;
import java.util.UUID;

@CrossOrigin
@RestController
@RequestMapping("/api/administrative-unit")
public class AdministrativeUnitController {
    @Autowired
    private AdministrativeUnitService mainService;

    @GetMapping(value = "/get-by-id/{id}")
    public ResponseEntity<AdministrativeUnitDto> getAdministrativeUnitById(@PathVariable UUID id) {
        AdministrativeUnitDto res = mainService.getById(id);
        if (res == null) return new ResponseEntity<AdministrativeUnitDto>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<AdministrativeUnitDto>(res, HttpStatus.OK);
    }

    @GetMapping(value = "/get-all")
    public ResponseEntity<Set<AdministrativeUnitDto>> getAllAdministrativeUnit() {
        Set<AdministrativeUnitDto> res = mainService.getAll();
        if (res == null) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<Set<AdministrativeUnitDto>>(res, HttpStatus.OK);
    }

    @PostMapping(value = "/paging-administrative-unit")
    public ResponseEntity<Page<AdministrativeUnitDto>> pagingAdministrativeUnit(@RequestBody SearchObject searchObject) {
        Page<AdministrativeUnitDto> res = mainService.searchByPage(searchObject);
        if (res == null) return new ResponseEntity<Page<AdministrativeUnitDto>>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<Page<AdministrativeUnitDto>>(res, HttpStatus.OK);
    }

    @PostMapping(value = "/save-administrative-unit")
    public ResponseEntity<AdministrativeUnitDto> createOrUpdateAdministrativeUnit(@RequestBody AdministrativeUnitDto dto) {
        AdministrativeUnitDto res = mainService.createOrUpdate(dto);
        if (res == null) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<AdministrativeUnitDto>(res, HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete-by-id/{id}")
    public void deleteAdministrativeUnitById(@PathVariable UUID id) {
        mainService.deleteById(id);
    }

    @DeleteMapping(value = "/delete-all")
    public void deleteAllAdministrativeUnit() {
        mainService.deleteAll();
    }

    @DeleteMapping(value = "/delete-list")
    public void deleteListAdministrativeUnit(@RequestBody Set<UUID> ids) {
        mainService.deleteList(ids);
    }
}
