"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import DatePicker from "@/components/inputDate";
import { InputField } from "@/components/login/input";
import { SelectField } from "@/components/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { ButtonForm } from "@/components/login/button";

import {
  useForm,
  FormProvider,
  SubmitHandler,
  useWatch,
} from "react-hook-form";

import { z } from "zod";
import { useEffect, useState } from "react";

interface FormValues {
  campanha: string;
  username: string;
  tipo_conteudo: string;
  data: Date;
  link: string;
  impressoes?: number;
  alcance?: number;
  curtidas?: number;
  salvos?: number;
  compartilhamentos?: number;
  comentarios?: number;
  taps_back?: number;
  sticker_touches?: number;
  replies?: number;
  stories_length?: number;
}

const requiredFieldsForContent = {
  Feed: [
    "impressoes",
    "alcance",
    "curtidas",
    "salvos",
    "compartilhamentos",
    "comentarios",
  ],
  "Videos Tiktok": [
    "impressoes",
    "alcance",
    "curtidas",
    "salvos",
    "compartilhamentos",
    "comentarios",
  ],
  "Videos YouTube": [
    "impressoes",
    "alcance",
    "curtidas",
    "salvos",
    "compartilhamentos",
    "comentarios",
  ],
  Stories: [
    "impressoes",
    "alcance",
    "compartilhamentos",
    "stories_length",
    "taps_back",
    "replies",
    "sticker_touches",
  ],
} as const;

type ContentFieldKeys = keyof typeof requiredFieldsForContent;
type FieldKeys = (typeof requiredFieldsForContent)[ContentFieldKeys][number];

const modalFormSchema = z
  .object({
    campanha: z.string().min(1, "Nome da campanha é obrigatório"),
    username: z
      .string()
      .min(1, "Username é obrigatório")
      .min(7, "Username muito pequeno"),
    data: z
      .date()
      .default(new Date())
      .refine((val) => val instanceof Date, {
        message: "Data é obrigatória",
      }),
    tipo_conteudo: z.string().min(1, "Tipo de conteúdo é obrigatório"),
    link: z.string().min(1, "Link é obrigatório").url("Insira um link válido"),
    impressoes: z.string().optional(),
    alcance: z.string().optional(),
    curtidas: z.string().optional(),
    salvos: z.string().optional(),
    compartilhamentos: z.string().optional(),
    comentarios: z.string().optional(),
    taps_back: z.string().optional(),
    sticker_touches: z.string().optional(),
    replies: z.string().optional(),
    stories_length: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    const requiredFields =
      requiredFieldsForContent[data.tipo_conteudo as ContentFieldKeys];
    requiredFields.forEach((field) => {
      if (!data[field as FieldKeys]) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Campo ${field} é obrigatório`,
          path: [field],
        });
      }
    });
  });

const options = ["Feed", "Stories", "Videos Tiktok", "Videos YouTube"];

export const ModalUpload = ({ open, setOpen }: any) => {
  // const [open, setOpen] = useState(false);

  const methods = useForm<FormValues>({
    resolver: zodResolver(modalFormSchema),
    defaultValues: {
      data: new Date(),
      tipo_conteudo: options[0],
    },
  });

  const { clearErrors, reset, control } = methods;

  const tipoConteudo = useWatch({
    control: methods.control,
    name: "tipo_conteudo",
  });

  useEffect(() => {
    clearErrors("tipo_conteudo");
  }, [tipoConteudo, clearErrors]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="bg-[#36A9E1] p-2 min-w-[340px] h-[55px] center rounded-[8px] text-white md:w-[100%] sm:w-full">
        + Upload
      </DialogTrigger>
      <DialogContent className="max-w-fit min-w-[300px] w-full rounded-[8px] p-7 max-h-screen ">
        <FormProvider {...methods}>
          <form
            className="rounded-md shadow-sm w-[100%]"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-3 gap-4 md:grid-cols-1 sm:grid-cols-1">
              <InputField
                label="Campanha"
                name="campanha"
                type="text"
                placeholder="Nome da Campanha"
                validation={{ required: true }}
              />
              <InputField
                label="Username"
                name="username"
                type="text"
                placeholder="Seu username"
                validation={{ required: true }}
              />
              <SelectField
                options={options}
                name="tipo_conteudo"
                label="Tipo de conteudo"
                placeholder="Selecione"
                classname="outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-3 md:grid-cols-1 sm:grid-cols-1">
              <DatePicker label="Data" name="data" />
              <InputField
                label="Link"
                name="link"
                type="text"
                placeholder="https://seulinkl.com.br"
                validation={{ required: true }}
              />
            </div>

            <div className="w-full relative my-8 border-solid border-[1px] border-[--app-gray-100] rounded-[8px] px-3 py-10">
              <span className="text-[--app-gray-500] border-solid border-[1px] border-[--app-gray-100] rounded-[8px] px-3 py-1 bg-[#ffffff] absolute top-[-15px] left-[15px]">
                {tipoConteudo}
              </span>
              {["Feed", "Videos Tiktok", "Videos YouTube"].includes(
                tipoConteudo
              ) && (
                <div className="grid grid-cols-3 whitespace-pre-wrap gap-3 grid-areas-mainform-layout lg:grid-cols-2 lg:grid-areas-mainform-layoutmobile md:grid-cols-2 md:grid-areas-mainform-layoutmobile sm:grid-cols-2 sm:grid-areas-mainform-layoutmobile ">
                  <InputField
                    label="Impressões"
                    name="impressoes"
                    type="number"
                    placeholder="Suas impressões"
                    className="grid-in-impressoes"
                  />
                  <InputField
                    label="Alcance"
                    name="alcance"
                    type="number"
                    placeholder="Seu alcance"
                    className="grid-in-alcance"
                  />
                  <InputField
                    label="Curtidas"
                    name="curtidas"
                    type="number"
                    placeholder="Suas curtidas"
                    className="grid-in-curtidas"
                  />
                  <InputField
                    label="Salvos"
                    name="salvos"
                    type="number"
                    placeholder="Vídeos salvos"
                    className="grid-in-salvos"
                  />
                  <InputField
                    label="Compartilhamentos"
                    name="compartilhamentos"
                    type="number"
                    placeholder="Compartilhamentos"
                    className="grid-in-compartilhamento"
                  />
                  <InputField
                    label="Comentários"
                    name="comentarios"
                    type="number"
                    placeholder="Quantidade de comentários"
                    className="grid-in-comentarios"
                  />
                </div>
              )}
              {tipoConteudo === "Stories" && (
                <div className="grid grid-cols-4 gap-3 grid-areas-storiesform-layout lg:grid-cols-2 lg:grid-areas-storiesform-layoutmobile md:grid-cols-2 md:grid-areas-storiesform-layoutmobile sm:grid-cols-2 sm:grid-areas-storiesform-layoutmobile">
                  <InputField
                    label="Impressões"
                    name="impressoes"
                    type="number"
                    placeholder="Suas impressões"
                    className="grid-in-impressoes"
                  />
                  <InputField
                    label="Alcance"
                    name="alcance"
                    type="number"
                    placeholder="Seu alcance"
                    className="grid-in-alcance"
                  />
                  <InputField
                    label="Compartilhamentos"
                    name="compartilhamentos"
                    type="number"
                    placeholder="Compartilhamentos"
                    className="grid-in-compartilhamento"
                  />
                  <InputField
                    label="Quantidade de stories"
                    name="stories_length"
                    type="number"
                    placeholder="Quantidade de stories"
                    className="grid-in-stories-length"
                  />
                  <InputField
                    label="Toques de volta"
                    name="taps_back"
                    type="number"
                    placeholder="Toques de volta"
                    className="grid-in-taps-back"
                  />
                  <InputField
                    label="Republicados"
                    name="replies"
                    type="number"
                    placeholder="Republicados"
                    className="grid-in-replies"
                  />
                  <InputField
                    label="Toques em figurinhas"
                    name="sticker_touches"
                    type="number"
                    placeholder="Toques em figurinhas"
                    className="grid-in-sticker-touches"
                  />
                </div>
              )}
            </div>

            <ButtonForm>Cadastrar</ButtonForm>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};
