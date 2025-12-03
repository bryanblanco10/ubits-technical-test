import { describe, it, vi, expect, beforeEach } from "vitest";
import Swal from "sweetalert2";
import { toastSuccess, toastError } from "../toast";

// Mock de Swal.fire
vi.mock("sweetalert2", () => ({
  default: {
    fire: vi.fn(),
  },
}));

describe("toast", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("toastSuccess should call Swal.fire with correct parameters", () => {
    toastSuccess("Éxito", "Registro guardado con éxito");

    expect(Swal.fire).toHaveBeenCalledWith(
      expect.objectContaining({
        icon: "success",
        title: "Éxito",
        text: "Registro guardado con éxito",
      })
    );
  });

  it("toastError should call Swal.fire with correct parameters", () => {
    toastError("Error", "Error al guardar registro");

    expect(Swal.fire).toHaveBeenCalledWith(
      expect.objectContaining({
        icon: "error",
        title: "Error",
        text: "Error al guardar registro",
      })
    );
  });

  it("toastSuces should use default parameters", () => {
    toastSuccess();

    expect(Swal.fire).toHaveBeenCalledWith(
      expect.objectContaining({
        icon: "success",
        title: "Éxito",
        text: "Registro guardado con éxito",
      })
    );
  });

  it("toastError should use default parameters", () => {
    toastError();

    expect(Swal.fire).toHaveBeenCalledWith(
      expect.objectContaining({
        icon: "error",
        title: "Error",
        text: "Error al guardar registro",
      })
    );
  });
});
