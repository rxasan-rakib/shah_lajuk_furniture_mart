// Common JavaScript for Admin Panel

// Document Ready Function
$(document).ready(function () {
  // Mobile sidebar toggle
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
    $(".overlay").toggleClass("active");
  });

  // Close sidebar when clicking outside
  $(".overlay").on("click", function () {
    $("#sidebar").removeClass("active");
    $(".overlay").removeClass("active");
  });

  // File input custom button handler
  $(document).on("click", "#uploadTrigger", function () {
    $("#adminImage").click();
  });

  // Click handler for image preview to trigger file input
  $(document).on("click", "#imagePreview", function () {
    $("#adminImage").click();
  });

  // Password matching validation
  $(document).on("input", "#confirmPassword", function () {
    if ($(this).val() !== $("#password").val()) {
      $(this).addClass("is-invalid");
    } else {
      $(this).removeClass("is-invalid").addClass("is-valid");
    }
  });

  // Toggle password visibility
  $("body").on("click", ".toggle-password", function () {
    const input = $(this).closest(".input-group").find("input");
    const icon = $(this).find("i");
    const type = input.attr("type") === "password" ? "text" : "password";
    input.attr("type", type);
    icon.toggleClass("fa-eye fa-eye-slash");
  });

  // Toggle password fields
  $("#changePasswordCheck").change(function () {
    $("#passwordFields").slideToggle();
  });

  // Image preview functionality
  function previewImage(inputId, previewId) {
    $(document).on("change", inputId, function () {
      if (this.files && this.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
          $(previewId).attr("src", e.target.result);
        };
        reader.onerror = function () {
          console.error("Error reading the file");
        };
        reader.readAsDataURL(this.files[0]);
      }
    });
  }

  // Image preview for add admin
  previewImage("#adminImage", "#previewImg");

  // Image preview for edit admin
  previewImage("#editAdminImage", "#editImagePreview");

  // Image preview for add user
  previewImage("#userImage", "#userPreviewImg");

  // Image preview for edit user
  previewImage("#editUserImage", "#editUserImagePreview");

  // Image preview for Add Banner
  $(document).on("change", "#bannerImage", function (e) {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        $("#imagePreview").attr("src", e.target.result);
        $("#imagePreviewContainer").show();
      };
      reader.readAsDataURL(file);
    }
  });

  // Image preview for Edit Banner
  $(document).on("change", "#editBannerImage", function (e) {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        $("#editImagePreview").attr("src", e.target.result);
      };
      reader.readAsDataURL(file);
    }
  });

  // Toggle password fields in edit user modal
  $("#resetPassword").on("change", function () {
    $("#passwordFields").toggle(this.checked);
    if (this.checked) {
      $("#newPassword, #confirmNewPassword").prop("required", true);
    } else {
      $("#newPassword, #confirmNewPassword").prop("required", false);
    }
  });

  // Save admin
  $("#saveAdminBtn").click(function () {
    // Add your save logic here
    alert("Admin saved successfully!");
    $("#addAdminModal").modal("hide");
  });

  // Update admin
  $("#updateAdminBtn").click(function () {
    // Add your update logic here
    alert("Admin updated successfully!");
    $("#editAdminModal").modal("hide");
  });

  // Initialize tooltips
  $('[data-bs-toggle="tooltip"]').tooltip();

  // Initialize popovers
  $('[data-bs-toggle="popover"]').popover();

  // Initialize DataTables if present
  if ($.fn.DataTable) {
    $(".data-table").DataTable({
      responsive: true,
      pageLength: 10,
      language: {
        search: "_INPUT_",
        searchPlaceholder: "Search...",
      },
    });
  }

  // Furniture image preview for add modal
  $(document).on("change", "#productImage", function (e) {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        $("#productImagePreview").attr("src", e.target.result).show();
      };
      reader.readAsDataURL(file);
    }
  });

  // Furniture image preview for edit modal
  $(document).on("change", "#editProductImage", function (e) {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        $("#editProductImagePreview").attr("src", e.target.result);
      };
      reader.readAsDataURL(file);
    }
  });

  // Reset add furniture form when modal is closed
  $("#addFurnitureModal").on("hidden.bs.modal", function () {
    $("#addFurnitureForm")[0].reset();
    $("#productImagePreview").hide();
  });

  // Save furniture data
  $("#saveFurnitureBtn").click(function () {
    const form = document.getElementById("addFurnitureForm");
    if (form.checkValidity()) {
      // Here you would typically send the data to the server
      // For now, we'll just show an alert and close the modal
      alert("Furniture added successfully!");
      $("#addFurnitureModal").modal("hide");
    } else {
      // If the form is invalid, trigger HTML5 validation
      form.reportValidity();
    }
  });

  // Update furniture data
  $("#updateFurnitureBtn").click(function () {
    const form = document.getElementById("editFurnitureForm");
    if (form.checkValidity()) {
      // Here you would typically send the updated data to the server
      // For now, we'll just show an alert and close the modal
      alert("Furniture updated successfully!");
      $("#editFurnitureModal").modal("hide");
    } else {
      // If the form is invalid, trigger HTML5 validation
      form.reportValidity();
    }
  });

  // Delete furniture button click handler
  $(document).on("click", ".delete-furniture", function () {
    if (confirm("Are you sure you want to delete this furniture item?")) {
      // Here you would typically send a delete request to the server
      // For now, we'll just show an alert
    }
  });
  // Show view modal
  $(document).on("click", '.btn-info[data-bs-target="#viewFurnitureModal"]', function () {
    $("#viewFurnitureModal").modal("show");
  });
});
