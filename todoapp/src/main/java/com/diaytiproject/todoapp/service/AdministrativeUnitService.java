package com.diaytiproject.todoapp.service;

import com.diaytiproject.todoapp.dto.AdministrativeUnitDto;
import com.diaytiproject.todoapp.dto.SearchObject;
import org.springframework.data.domain.Page;

import java.util.Set;
import java.util.UUID;

public interface AdministrativeUnitService {
    public AdministrativeUnitDto getById(UUID id);

    public Page<AdministrativeUnitDto> searchByPage(SearchObject searchObject);

    public Set<AdministrativeUnitDto> getAll();

    public AdministrativeUnitDto createOrUpdate(AdministrativeUnitDto dto);

    public void deleteById(UUID id);

    public void deleteAll();

    public void deleteList(Set<UUID> ids);
}
