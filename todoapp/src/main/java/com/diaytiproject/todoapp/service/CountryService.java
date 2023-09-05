package com.diaytiproject.todoapp.service;

import java.util.List;
import java.util.UUID;

import org.springframework.data.domain.Page;

import com.diaytiproject.todoapp.dto.CountryDto;
import com.diaytiproject.todoapp.dto.SearchObject;

public interface CountryService {
	public CountryDto getCountryById(UUID countryId);

	public Page<CountryDto> pagingCountry(SearchObject searchObj);

	public List<CountryDto> getAllCountry();

	public CountryDto createCountry(CountryDto dto);

	public CountryDto updateCountry(CountryDto dto);

	public void deleteCountry(UUID countryId);
	
	public void deleteAllCountry();
	
	public void deleteListCountry(List<UUID> countryIds);

}
