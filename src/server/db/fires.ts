import { pool, Query } from './index';

export const getFireByName = async (name: string) => {
    Query('SELECT * FROM fires WHERE name = ?', [name]);
}

export const getFires = async () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM fires', (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
}

export const getFireById = async (id: string) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM fires WHERE id = ?', [id], (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
}

export const addFire = async (lat: number, lon: number, userid: number, threat: number, photo: string) => {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO fires (lat, lon, userid, threat, photo) VALUES (?, ?, ?, ?, ?)', [lat, lon, userid, threat, photo], (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
}

export const deleteFire = async(id: number) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM fires WHERE id = ?', [id], (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
}

export const updateFire = async(lat: number, lon: number, id: number) => {
    return new Promise((resolve, reject) => {
        pool.query('UPDATE fires SET lat = ?, lon = ? WHERE id = ?', [lat, lon, id], (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
}


export default {
    getFires, getFireById, addFire,
    deleteFire, updateFire
}