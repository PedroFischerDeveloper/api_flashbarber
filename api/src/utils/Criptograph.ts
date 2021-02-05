
import crypto from 'crypto';


export default class Criptograph {
  
    criptograph = (value: string) => {
    
        try {

            const hash = crypto.createHash('sha512'); // Algoritmo de cripto sha512
                hash.update(value);

                var passwordHash = hash.digest('hex');
                return passwordHash;
        } catch(err) {
            return err;
        }

    }

}