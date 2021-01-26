
import crypto from 'crypto';


export default class Criptograph {

    getSalt = (value: string) => {
        return crypto.randomBytes(Math.ceil(value.length/2))
            .toString('hex')
            .slice(0,16); 
    }

    criptograph = (value: string) => {
    
        try {
            const salt = this.getSalt(value);

            const hash = crypto.createHmac('sha512', salt); // Algoritmo de cripto sha512
                hash.update(value);

                var passwordHash = hash.digest('hex');
                return passwordHash;
        } catch(err) {
            return err;
        }

    }

}