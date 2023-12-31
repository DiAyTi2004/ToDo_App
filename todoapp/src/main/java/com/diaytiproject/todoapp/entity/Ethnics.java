package com.diaytiproject.todoapp.entity;

import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "ethnics")
public class Ethnics {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Type(type = "uuid-char")
	@Column(name = "id", unique = true, nullable = false)
	private UUID id;

	private String code;

	private String name;

	private String description;

	public Ethnics() {

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

}
