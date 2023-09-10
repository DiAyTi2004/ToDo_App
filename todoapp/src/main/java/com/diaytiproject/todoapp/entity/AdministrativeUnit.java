package com.diaytiproject.todoapp.entity;

import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "administrative_unit")
public class AdministrativeUnit {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Type(type = "uuid-char")
    @Column(name = "id", unique = true, nullable = false)
    private UUID id;

    private String code;

    private String name;

    private String description;

    private Integer level;

    @ManyToOne
    @JoinColumn(name = "parent_id")
    private AdministrativeUnit parent;

    @OneToMany(mappedBy = "parent")
    private Set<AdministrativeUnit> children;

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

    public AdministrativeUnit getParent() {
        return parent;
    }

    public void setParent(AdministrativeUnit parent) {
        this.parent = parent;
    }

    public Set<AdministrativeUnit> getChildren() {
        return children;
    }

    public void setChildren(Set<AdministrativeUnit> children) {
        this.children = children;
    }
}
