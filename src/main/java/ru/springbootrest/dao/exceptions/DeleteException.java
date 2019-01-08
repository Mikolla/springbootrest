package ru.springbootrest.dao.exceptions;

/**
 * Created by SKYNET on 07.03.2017.
 */
public class DeleteException extends RuntimeException {
    public DeleteException(String message){
        super(message);
    }
}
