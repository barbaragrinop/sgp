import Head from "next/head";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import styles from "@/styles/NossosProfessores.module.scss";
import { FooterCompleto } from "@/components/FooterCompleto";
import { useRouter } from "next/router";
import Button from "@/components/Button";
import { CursosTreinamentosType } from "@/typings/CursosTreinamentos";
import ProfessoresComponent from "@/components/Professores";
import Dropdown from "@/components/Dropdown";

export default function orcamento() {
  const { push } = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<CursosTreinamentosType>();

  function modalState(content: CursosTreinamentosType) {
    setIsModalOpen(!isModalOpen);
    setModalContent(content)
  }

  return (
    <div className={styles.main}>
      <Head>
        <title>SGP - Soluções em Gestão Público</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.bluredBall}></div>
        <div className={styles.headerContent}>
          <h1>Conheça nossos professores</h1>
          <hr />
          <p>
          Conheça nosso corpo docente de excelência e gabarito, que aplicam e vivenciam as melhores boas práticas do mercado.
          </p>
          <Button color="blue" title="Saber Mais!" />
        </div>
      </div>
      <div className={styles.pageSize}>
        
        <ProfessoresComponent />
      </div>
      <Dropdown />

      <FooterCompleto />
      

    </div>
  );
}
