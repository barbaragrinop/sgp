import Head from "next/head";
import React, { FormEvent } from "react"
import Navbar from "@/components/Navbar";
import styles from '@/styles/Documentacoes.module.scss'
import * as yup from "yup";
import { FooterCompleto } from "@/components/FooterCompleto";
import {  AiOutlinePaperClip } from "react-icons/ai";
import Image from "next/image";
import { CertidoesDeclaracoes } from "@/utils/certidoes-declaracoes";

const schema = yup.object().shape({
  nome: yup.string().required("Campo obrigatório"),
  email: yup.string().required("Campo obrigatório"),
  mensagem: yup.string().required("Campo obrigatório"),
  arquivo: yup.mixed().nullable().required('A file is required'),
  assunto: yup.string().required("Campo obrigatório"),
  celular: yup.string().required("Campo obrigatório"),
  conheceusgp: yup.string().required("Campo obrigatório"),
  dataEnvio: yup.string().required("Campo obrigatório"),
  empresa: yup.string().required("Campo obrigatório"),
  facebook: yup.string().required("Campo obrigatório"),
  telComl: yup.string().required("Campo obrigatório"),
});

const initialValues = {
  nome: "",
  email: "",
  mensagem: "",
  arquivo: "", 
  assunto: "", 
  celular: "", 
  conheceusgp: "", 
  dataEnvio: undefined,
  empresa: "", 
  facebook: "", 
  telComl: ""
}

export default function orcamento() {


  return (
    <div className={styles.main}>
      <Head>
        <title>SGP - Soluções em Gestão Público</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.content}></div>
      <div className={styles.pageSize}>
        <div className={styles.mainContentForm}>
          <div className={styles.introduction}>
            <h2>Documentações SGP</h2>
            <span>Caro cliente, aqui se encontra a lista de documentações para que possa <b>realizar download.</b> </span>
            <span>Caso não encontre a documentação necessária, acesse este link <b>"Minha Documentação"</b> e solicite à SGP Soluções.</span>
            
            <ul>
              <li>Informações cadastrais</li>
              <li>SGP Soluções em Gestão Pública | CNPJ: 29.759.932/0001-02 | Rua Sete de Abril, 282 - Conj: 113 - 11º andar - CEP: 01044-905 - República - São Paulo - SP</li>
            </ul>
            <div className={styles.imgDiv}>
              <Image
                src={"/images/contato/mulher-sorrindo.webp"}
                alt="Bolo de chocolate"
                width={416}
                height={435}
              />
            </div>
            
          </div>
          <div className={styles.documentacoes}>
            <h2 className={styles.certidao} >Demais documentações</h2>
            <p className={styles.documentacaoBaixar}>
              <AiOutlinePaperClip  style={{fontSize: "20px"}} /> <span>Cadastro Nacional de Pessoa Jurídica - CNPJ</span>
            </p>
            <h2 className={styles.certidao} style={{marginTop: "30px"}}>Certidões e Declarações</h2>
            <div className={styles.certidoesDeclaracoesMap}>
              {CertidoesDeclaracoes.map(({titulo, link}) => (
                <p className={styles.documentacaoBaixar}>
                  <AiOutlinePaperClip style={{fontSize: "20px"}} /> 
                  <span>{titulo}</span>
                </p>
              ))}
            </div>
            
          </div>
  
        </div>
      </div>
      {/* <WhatsappIcon /> */}
      <FooterCompleto />
    </div>
  );
}
