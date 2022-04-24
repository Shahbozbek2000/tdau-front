import { SelectItem } from 'components/select';
import React from 'react';
import { admissionApi } from 'services/api/pagesApi';

export function useGetList({
  setNationalities,
  setCountries,
  setGenders,
  setEducationFormList,
  setEducationTypeList,
  setRegions,
  setQualifications,
  setFaculty,
}) {
  async function getNationality() {
    try {
      const res = await admissionApi.nationality(null);
      console.log(res, 'response');
      SelectItem(res, setNationalities);
    } catch (e) {
      console.log(e);
    }
  }
  async function getCountries() {
    try {
      const response = await admissionApi.countries(null);
      SelectItem(response, setCountries);
    } catch (e) {
      console.log(e);
    }
  }
  async function getRegions() {
    try {
      const response = await admissionApi.regions(null);
      SelectItem(response, setRegions);
    } catch (e) {
      console.log(e);
    }
  }
  async function getGenders() {
    try {
      const response = await admissionApi.genders(null);
      SelectItem(response, setGenders);
    } catch (e) {
      console.log(e);
    }
  }
  async function getEducationForm() {
    try {
      const response = await admissionApi.educationForm(null);
      SelectItem(response, setEducationFormList);
    } catch (e) {
      console.log(e);
    }
  }
  async function getEducationType() {
    try {
      const response = await admissionApi.educationType(null);
      SelectItem(response, setEducationTypeList);
    } catch (e) {
      console.log(e);
    }
  }
  async function getQualification() {
    try {
      const response = await admissionApi.qualifications(null);
      SelectItem(response, setQualifications);
    } catch (e) {
      console.log(e);
    }
  }
  async function getFaculty() {
    try {
      const response = await admissionApi.facultyGet(null);
      SelectItem(response, setFaculty);
    } catch (e) {
      console.log(e);
    }
  }

  return {
    getNationality,
    getCountries,
    getGenders,
    getEducationForm,
    getEducationType,
    getRegions,
    getQualification,
    getFaculty,
  };
}
