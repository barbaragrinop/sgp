import Head from "next/head";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import styles from "@/styles/Mba.module.scss";
import { FooterCompleto } from "@/components/FooterCompleto";
import { useRouter } from "next/router";
import Button from "@/components/Button";
import { CursosTreinamentosType } from "@/typings/CursosTreinamentos";
import Image from "next/image";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function SolucoesInovadoras() {
  const { push, pathname, back } = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<CursosTreinamentosType>();

  function modalState(content: CursosTreinamentosType) {
    setIsModalOpen(!isModalOpen);
    setModalContent(content);
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
      <section className={styles.content}>
        <div className={styles.bluredBall}></div>
            <div className={styles.headerContent}>
            <div className={styles.left}>
                <div className={styles.mainTitle}>
                <h1> MBA em Licitações </h1>
                <hr />
                </div>
                <p> Conteúdo Programatico </p>
            </div>
        </div>
      </section>
      <div className={styles.pageSize}>
        <section className={styles.conteudoProgramatico}>
          <h1>Conteúdo Programático</h1>
          <hr />
          <div className={styles.conteudosListados}>
            <ul>
              <li><b>1.</b><span> Evolução das Licitações Públicas</span></li>
              <li><b>2.</b><span> Administração Pública Descomplicada – Parte I</span></li>
              <li><b>3.</b><span> Administração Pública Descomplicada – Parte II</span></li>
              <li><b>4.</b><span> Planejamento Prévio das Contratações Públicas – Parte I</span></li>
              <li><b>5.</b><span> Planejamento Prévio das Contratações Públicas – Parte II</span></li>
              <li><b>6.</b><span> Planejamento Prévio das Contratações Públicas – Parte III</span></li>
              <li><b>7.</b><span> Impacto ambiental e planejamento urbanístico nas Licitações – Parte I</span></li>
              <li><b>8.</b><span> Impacto ambiental e planejamento urbanístico nas Licitações – Parte II</span></li>
              <li><b>9.</b><span> Impacto ambiental e planejamento urbanístico nas Licitações – Parte III</span></li>
              <li><b>10.</b><span> Projeto Básico, Projeto Executivo, Termo de Referência, Anteprojeto e Estudo Técnico Preliminar – Parte I</span></li>
              <li><b>11.</b><span> Projeto Básico, Projeto Executivo, Termo de Referência, Anteprojeto e Estudo Técnico Preliminar – Parte II</span></li>
              <li><b>12.</b><span> Projeto Básico, Projeto Executivo, Termo de Referência, Anteprojeto e Estudo Técnico Preliminar – Parte III</span></li>
            </ul>
            <ul>
              <li><b>13.</b><span> Terceirização lícita e terceirização ilícita </span></li>
              <li><b>14.</b><span> Contratação Direta – Parte I</span></li>
              <li><b>15.</b><span> Contratação Direta – Parte II</span></li>
              <li><b>16.</b><span> Contratação Direta – Parte III</span></li>
              <li><b>17.</b><span> Processo Licitatório – Parte I</span></li>
              <li><b>18.</b><span> Processo Licitatório – Parte II</span></li>
              <li><b>19.</b><span> Processo Licitatório – Parte III</span></li>
              <li><b>20.</b><span> Processo Licitatório – Parte VI</span></li>
              <li><b>21.</b><span> Obras e serviços de engenharia – Parte I</span></li>
              <li><b>22.</b><span> Obras e serviços de engenharia – Parte II</span></li>
              <li><b>23.</b><span> Obras e serviços de engenharia – Parte III</span></li>
              <li><b>24.</b><span> Contratações verdes ou sustentáveis – Parte I</span></li>
              <li><b>25.</b><span> Contratações verdes ou sustentáveis – Parte II</span></li>
              <li><b>26.</b><span> Licitações internacionais</span></li>
              <li><b>27.</b><span> Pequenas empresas nas licitações públicas – Parte I</span></li>
              <li><b>28.</b><span> Pequenas empresas nas licitações públicas – Parte II</span></li>
              <li><b>29.</b><span> Procedimentos auxiliares (credenciamento, pré-qualificação, procedimento de manifestação de interesse, sistema de registro de preços, registro cadastral) – Parte I</span> </li>
            </ul>
            <ul>
              <li><b>30.</b><span> Procedimentos auxiliares (credenciamento, pré-qualificação, procedimento de manifestação de interesse, sistema de registro de preços, registro cadastral) – Parte II</span></li>
              <li><b>31.</b><span> Procedimentos auxiliares (credenciamento, pré-qualificação, procedimento de manifestação de interesse, sistema de registro de preços, registro cadastral) – Parte III</span></li>
              <li><b>32.</b><span> Formalização dos contratos – Parte I</span></li>
              <li><b>33.</b><span> Formalização dos contratos – Parte II</span></li>
              <li><b>34.</b><span> Execução contratual – Parte I</span></li>
              <li><b>35.</b><span> Execução contratual – Parte II</span></li>
              <li><b>36.</b><span> Extinção dos contratos e aplicação de sanções – Parte I</span></li>
              <li><b>37.</b><span> Extinção dos contratos e aplicação de sanções – Parte II</span></li>
              <li><b>38.</b><span> Extinção dos contratos e aplicação de sanções – Parte III</span></li>
              <li><b>39.</b><span> Gestão e fiscalização contratual – Parte I</span></li>
              <li><b>40.</b><span> Gestão e fiscalização contratual – Parte II</span></li>
              <li><b>41.</b><span> Acordos Administrativos em Licitações</span></li>
            </ul>
            <ul>
              <li><b>42.</b><span> Crimes licitatórios – Parte I </span></li>
              <li><b>43.</b><span> Crimes licitatórios – Parte II</span></li>
              <li><b>44.</b><span> Métodos alternativos de solução de conflitos na lei de licitações – Parte I</span></li>
              <li><b>45.</b><span> Métodos alternativos de solução de conflitos na lei de licitações – Parte II</span></li>
              <li><b>46.</b><span> Licitações e Contratos nas Estatais – Parte I</span></li>
              <li><b>47.</b><span> Licitações e Contratos nas Estatais – Parte II</span></li>
              <li><b>48.</b><span> Licitações e Contratos nas Estatais – Parte III</span></li>
              <li><b>49.</b><span> Licitação e contratação de serviços de publicidade prestados por agências de propaganda – Parte I</span></li>
              <li><b>50.</b><span> Licitação e contratação de serviços de publicidade prestados por agências de propaganda – Parte II</span></li>
              <li><b>51.</b><span> Parcerias na Administração Pública e outros instrumentos – Parte I</span></li>
              <li><b>52.</b><span> Parcerias na Administração Pública e outros instrumentos – Parte II</span></li>
            </ul>
            <ul>
              <li><b>53.</b><span> Parcerias na Administração Pública e outros instrumentos – Parte III</span></li>
              <li><b>54.</b><span> Responsabilização do Poder Público e seus agentes – Parte I</span></li>
              <li><b>55.</b><span> Responsabilização do Poder Público e seus agentes – Parte II</span></li>
              <li><b>56.</b><span> Processo Administrativo Disciplinar e Sindicância</span></li>
              <li><b>57.</b><span> Improbidade administrativa – Parte I</span></li>
              <li><b>58.</b><span> Improbidade administrativa – Parte II</span></li>
              <li><b>59.</b><span> Controle interno e Controle Externo – Parte I</span></li>
              <li><b>60.</b><span> Controle interno e Controle Externo – Parte II</span></li>
              <li><b>61.</b><span> Teoria Geral dos Convênios</span></li>
              <li><b>62.</b><span> Elaboração de pareceres – Parte I</span></li>
              <li><b>63.</b><span> Elaboração de pareceres – Parte II</span></li>
              <li><b>64.</b><span> Elaboração de pareceres – Parte III</span></li>
              <li><b>65.</b><span> Metodologia de Pesquisa</span></li>
              <li><b>66.</b><span> Didática no Ensino Superior (Optativa)</span></li>
            </ul>
          </div>
          <Button color="darkBlue" title="Voltar" onClick={() => back()} />
        </section>
      </div>
      <FooterCompleto />
    </div>
  );
}