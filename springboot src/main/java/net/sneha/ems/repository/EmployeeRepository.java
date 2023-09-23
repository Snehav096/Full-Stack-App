package net.sneha.ems.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.sneha.ems.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}