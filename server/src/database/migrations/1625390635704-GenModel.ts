import {MigrationInterface, QueryRunner} from "typeorm";

export class GenModel1625390635704 implements MigrationInterface {
    name = 'GenModel1625390635704'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "desenvolvedor" ("id" SERIAL NOT NULL, "nome" character varying(80) NOT NULL, "sexo" character varying(1) NOT NULL, "hobby" character varying NOT NULL, "data_nascimento" TIMESTAMP NOT NULL, CONSTRAINT "PK_caed89da6970e6d035f4bacea87" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "desenvolvedor"`);
    }

}
