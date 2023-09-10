package com.diaytiproject.todoapp.service.impl;

import com.diaytiproject.todoapp.dto.AdministrativeUnitDto;
import com.diaytiproject.todoapp.dto.SearchObject;
import com.diaytiproject.todoapp.repository.AdministrativeUnitRepository;
import com.diaytiproject.todoapp.service.AdministrativeUnitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.UUID;

@Service
public class AdministrativeUnitServiceImpl implements AdministrativeUnitService {
    @Autowired
    private AdministrativeUnitRepository mainRepos;

    @Override
    public AdministrativeUnitDto getById(UUID id) {
        return null;
    }

    @Override
    public Page<AdministrativeUnitDto> searchByPage(SearchObject searchObject) {
        return null;
    }

    @Override
    public Set<AdministrativeUnitDto> getAll() {
        return null;
    }

    @Override
    public AdministrativeUnitDto createOrUpdate(AdministrativeUnitDto dto) {
        return null;
    }

    @Override
    public void deleteById(UUID id) {

    }

    @Override
    public void deleteAll() {

    }

    @Override
    public void deleteList(Set<UUID> ids) {

    }
}
