import { pool } from './index';

export const getUserById = async (id: string) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT name FROM users WHERE id = ?', [id], (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
}

export const getUserByEmail = async (email: string) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
}

export const createUser = async (name: string, email: string, phone: string, password: string) => {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)', [name, email, phone, password], (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
}


export default {
    getUserById, getUserByEmail, createUser
}