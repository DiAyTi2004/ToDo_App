package com.diaytiproject.todoapp.dto;

import com.diaytiproject.todoapp.entity.AdministrativeUnit;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

public class AdministrativeUnitDto {
    private UUID id;

    private String code;

    private String name;

    private String description;

    private Integer level;

    private AdministrativeUnitDto parent;

    private Set<AdministrativeUnitDto> children;

    public AdministrativeUnitDto() {

    }

    public AdministrativeUnitDto(AdministrativeUnit entity) {
        this.id = entity.getId();
        this.code = entity.getCode();
        this.description = entity.getDescription();
        this.level = entity.getLevel();
        if (entity.getParent() != null) {
            this.parent = new AdministrativeUnitDto(entity.getParent());
        }
        if (entity.getChildren() != null) {
            Set<AdministrativeUnitDto> children = new HashSet<AdministrativeUnitDto>();
            for (AdministrativeUnit child : entity.getChildren()) {
                children.add(new AdministrativeUnitDto(child));
            }
            this.children = children;
        }
    }


    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }

    public AdministrativeUnitDto getParent() {
        return parent;
    }

    public void setParent(AdministrativeUnitDto parent) {
        this.parent = parent;
    }

    public Set<AdministrativeUnitDto> getChildren() {
        return children;
    }

    public void setChildren(Set<AdministrativeUnitDto> children) {
        this.children = children;
    }
}
