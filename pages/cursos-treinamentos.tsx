import Head from "next/head";
import React, { FormEvent, useState } from "react";
import Navbar from "@/components/Navbar";
import styles from "@/styles/CursosTreinamentos.module.scss";
import { FooterCompleto } from "@/components/FooterCompleto";
import { useRouter } from "next/router";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CursosTreinamentosType } from "@/typings/CursosTreinamentos";
import { BsPersonCircle } from "react-icons/bs";
import { Cursos, Treinamentos } from "@/utils/cursos-treinamentos";
import classNames from "classnames";

export default function orcamento() {
  const { push } = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<CursosTreinamentosType>();

  function modalState() {
    setIsModalOpen(!isModalOpen);
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
          <h1>Cursos e Treinamentos</h1>
          <hr />
          <p>
            <b>A SGP Soluções</b> registra todos os momentos especiais para
            nunca esquecer que o mais importante sempre será você{" "}
            <b>nosso cliente</b>.
          </p>
          <Button color="blue" title="Saber Mais!" />
        </div>
      </div>
      <div className={styles.pageSize}>
        <div className={styles.mainContentForm}>
          <div className={styles.introduction}>
            <div className={styles.left}>
              <h2>Confira nossos cursos</h2>
              <span>
                Conheça nossos cursos de excelência e gabarito, que aplicam e
                vivenciam as melhores boas práticas do mercado.
              </span>
            </div>
            <div className={styles.right}>
              <div className={styles.inputLupa}>
                <HiMagnifyingGlass />
                <Input
                  withIcon
                  placeholder="Pesquisar curso..."
                  label=""
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className={styles.cursosNovos}>
            {Cursos.map(({ objetivo, publicoalvo, title, cursoNovo }) => (
              <div className={styles.curso}>
                <div
                  className={classNames({
                    [styles.isCursoNovo]: cursoNovo,
                    [styles.isCursoAntigo]: !cursoNovo,
                  })}
                ></div>
                <div>
                  <h4>
                    <b>{title}</b>
                  </h4>
                  <p role="button">
                    <span>
                      <BsPersonCircle /> Conferir detalhes
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p>
            Confira a lista completa{" "}
            <b style={{ cursor: "pointer" }}>clicando aqui!</b>
          </p>
        </div>
      </div>
      <div className={styles.empresaIndicada}>
        <hr />
        <h2>Porque somos a empresa mais indicada em cursos e treinamentos?</h2>
        <div>
          <ul>
            <li>Profissionais altamente qualificados</li>
            <li>Conteúdo programático completo</li>
            <li>Temas relevantes e atuais</li>
            <li>Saneamento de todas as dúvidas</li>
            <li>Aulas expositivas</li>
            <li>Dinâmicas em grupo</li>
            <li>Carga horária adequada</li>
          </ul>
          <ul>
            <li>Alto índice de satisfação</li>
            <li>Conhecimento prático e técnico</li>
            <li>Material didático de qualidade</li>
            <li>Adaptações às necessidades específicas</li>
            <li>Metodologia diferenciada</li>
            <li>Estudos de casos práticos</li>
            <li>Reconhecimento no mercado</li>
          </ul>
        </div>
      </div>
      <div className={styles.mainContentFormTreinamento}>
        <div className={styles.introduction}>
          <div className={styles.left}>
            <h2>Confira nossos treinamentos</h2>
            <span>
              Conheça nossos treinamentos de excelência e gabarito, que aplicam
              e vivenciam as melhores boas práticas do mercado.
            </span>
          </div>
          <div className={styles.right}>
            <div className={styles.inputLupa}>
              <HiMagnifyingGlass />
              <Input
                withIcon
                placeholder="Pesquisar treinamento..."
                label=""
                type="text"
              />
            </div>
          </div>
        </div>
        <div className={styles.cursosNovos}>
          {Treinamentos.map(({ objetivo, publicoalvo, title, cursoNovo }) => (
            <div className={styles.curso}>
              <div
                className={classNames({
                  [styles.isCursoNovo]: cursoNovo,
                  [styles.isCursoAntigo]: !cursoNovo,
                })}
              ></div>
              <div>
                <h4>
                  <b>{title}</b>
                </h4>
                <p role="button">
                  <span>
                    <BsPersonCircle /> Conferir detalhes
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <p>
          Confira a lista completa{" "}
          <b style={{ cursor: "pointer" }}>clicando aqui!</b>
        </p>
      </div>
      <div className={styles.empresaIndicadaBottom}>
        <hr />
        <h2>“O conhecimento é a única coisa que não podem tirar de você”.</h2>
      </div>
      <FooterCompleto />
    </div>
  );
}