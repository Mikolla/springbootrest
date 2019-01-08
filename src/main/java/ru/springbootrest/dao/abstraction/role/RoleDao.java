package ru.springbootrest.dao.abstraction.role;


import ru.springbootrest.dao.GenericDao;
import ru.springbootrest.model.Role;

/**
 * Created by Skrezhet on 09.04.2017.
 */
public interface RoleDao extends GenericDao<Long, Role> {
    Role getRoleByRoleName(String roleName);
}
