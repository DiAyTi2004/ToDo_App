package com.diaytiproject.todoapp.repository;

import com.diaytiproject.todoapp.entity.AdministrativeUnit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface AdministrativeUnitRepository extends JpaRepository<AdministrativeUnit, UUID> {

}
