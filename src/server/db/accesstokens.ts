import { pool } from './index';

// For your accesstokens table, make sure you can findOneByIdAndToken, insert, and update a token at a minimum

export const getToken = async (id: string, token: string) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM accesstokens WHERE id = ? AND token = ?', [id, token], (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
}

export const getTokenById = async (id: number) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM accesstokens WHERE id = ?', [id], (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
}

export const addToken = async (userid: string) => {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO accesstokens (userid, token) VALUES (?, "")', [userid], (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
}

export const updateToken = async (token: string, id: string) => {
    return new Promise((resolve, reject) => {
        pool.query('UPDATE accesstokens SET token = ? WHERE id = ?', [token, id], (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
}

export default {
    getToken, getTokenById,
    addToken, updateToken
}